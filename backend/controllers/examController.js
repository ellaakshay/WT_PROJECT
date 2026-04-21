// filepath: backend/controllers/examController.js
const Exam = require('../models/Exam');
const Question = require('../models/Question');
const { validationResult } = require('express-validator');

// @desc    Create new exam (Admin only)
// @route   POST /api/exams
// @access  Private (Admin)
const createExam = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, duration, scheduledAt } = req.body;

    const exam = await Exam.create({
      title,
      description,
      duration,
      scheduledAt,
      createdBy: req.user._id
    });

    res.status(201).json({
      success: true,
      data: exam,
      message: 'Exam created successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Add questions to exam (Admin only)
// @route   POST /api/exams/:examId/questions
// @access  Private (Admin)
exports.addQuestion = async (req, res) => {
  try {
    const { examId } = req.params;
    const { questions } = req.body;

    // Check if exam exists
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    // Validate questions array
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ message: 'Questions array is required' });
    }

    // Create questions
    const createdQuestions = await Question.insertMany(
      questions.map(q => ({
        examId: examId,
        questionText: q.questionText,
        options: q.options,
        correctAnswer: q.correctAnswer
      }))
    );

    // Add question IDs to exam
    exam.questions.push(...createdQuestions.map(q => q._id));
    await exam.save();

    res.status(201).json({
      success: true,
      data: createdQuestions,
      message: `${createdQuestions.length} questions added successfully`
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all exams (Admin only)
// @route   GET /api/exams
// @access  Private (Admin)
const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find()
      .populate('createdBy', 'name email')
      .populate('questions')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: exams.length,
      data: exams
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get available exams (Student only)
// @route   GET /api/exams/available
// @access  Private (Student)
exports.getAvailableExams = async (req, res) => {
  try {
    // Get ALL exams — no date filter whatsoever
    const exams = await Exam.find({}).sort({ createdAt: -1 });

    // For each exam, get its questions count
    const examsWithQuestions = await Promise.all(
      exams.map(async (exam) => {
        const questions = await Question.find(
          { examId: exam._id },
          { questionText: 1, options: 1, examId: 1 }
        );
        return {
          _id: exam._id,
          title: exam.title,
          description: exam.description,
          duration: exam.duration,
          scheduledAt: exam.scheduledAt,
          createdAt: exam.createdAt,
          questionCount: questions.length,
        };
      })
    );

    res.status(200).json(examsWithQuestions);
  } catch (error) {
    console.error("getAvailableExams error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get exam by ID with questions (Student only - without correct answers)
// @route   GET /api/exams/:examId
// @access  Private (Student)
exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Get questions WITHOUT correctAnswer field
    const questions = await Question.find(
      { examId: req.params.examId },
      { questionText: 1, options: 1, examId: 1 }
    );

    res.status(200).json({
      _id: exam._id,
      title: exam.title,
      description: exam.description,
      duration: exam.duration,
      scheduledAt: exam.scheduledAt,
      questions: questions,
    });
  } catch (error) {
    console.error("getExamById error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Delete exam (Admin only)
// @route   DELETE /api/exams/:examId
// @access  Private (Admin)
const deleteExam = async (req, res) => {
  try {
    const { examId } = req.params;

    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    // Delete all questions associated with the exam
    await Question.deleteMany({ examId: examId });

    // Delete the exam
    await exam.deleteOne();

    res.json({
      success: true,
      message: 'Exam deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.generateAIQuestions = async (req, res) => {
  try {
    const { examId } = req.params;
    const { topic, count, difficulty } = req.body;

    // Validate inputs
    if (!topic || !topic.trim()) {
      return res.status(400).json({ message: "Topic is required" });
    }

    const questionCount = parseInt(count) || 5;
    const difficultyLevel = difficulty || "medium";

    // Check exam exists
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Initialize OpenRouter AI
    const fetch = (await import("node-fetch")).default;

    // Build the prompt for OpenRouter
    const prompt = `You are an expert exam question creator.
Generate exactly ${questionCount} multiple choice questions about the topic: "${topic.trim()}"
Difficulty level: ${difficultyLevel}

IMPORTANT RULES:
1. Return ONLY a valid JSON array. No extra text, no markdown, no explanation.
2. Each question must have exactly 4 options.
3. correctAnswer must be exactly one of: "A", "B", "C", or "D"
4. Questions must be clear, educational, and appropriate for an exam.
5. Options must be concise (under 10 words each).

Return this exact JSON format:
[
  {
    "questionText": "Your question here?",
    "options": ["First option", "Second option", "Third option", "Fourth option"],
    "correctAnswer": "A"
  }
]

Generate ${questionCount} questions now:`;

    const aiResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5000",
        "X-Title": "Online Exam System"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!aiResponse.ok) {
      const errData = await aiResponse.json();
      console.error("OpenRouter error:", errData);
      return res.status(500).json({
        message: "AI service error. Please try again.",
        error: errData
      });
    }

    const aiData = await aiResponse.json();
    const responseText = aiData.choices?.[0]?.message?.content;

    if (!responseText) {
      return res.status(500).json({
        message: "AI returned empty response. Please try again."
      });
    }

    console.log("OpenRouter raw response:", responseText.substring(0, 300));

    // Extract JSON from response
    let questions;
    try {
      // Try to find JSON array in the response
      const jsonMatch = responseText.match(/\[[\s\S]*\]/);
      if (!jsonMatch) {
        throw new Error("No JSON array found in AI response");
      }
      questions = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.error("JSON parse error:", parseError.message);
      return res.status(500).json({
        message: "AI returned invalid format. Please try again.",
        error: parseError.message
      });
    }

    // Validate each question
    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(500).json({
        message: "AI did not generate any questions. Try a different topic."
      });
    }

    const validAnswers = ["A", "B", "C", "D"];
    const validQuestions = questions.filter(q =>
      q.questionText &&
      Array.isArray(q.options) &&
      q.options.length === 4 &&
      validAnswers.includes(q.correctAnswer)
    );

    if (validQuestions.length === 0) {
      return res.status(500).json({
        message: "AI questions had invalid format. Please try again."
      });
    }

    // Save all valid questions to database
    const savedQuestions = await Promise.all(
      validQuestions.map(q =>
        Question.create({
          examId: examId,
          questionText: q.questionText.trim(),
          options: q.options.map(opt => opt.toString().trim()),
          correctAnswer: q.correctAnswer
        })
      )
    );

    console.log(`AI generated ${savedQuestions.length} questions for exam ${examId}`);

    res.status(201).json({
      message: `Successfully generated ${savedQuestions.length} questions using AI!`,
      count: savedQuestions.length,
      questions: savedQuestions
    });

  } catch (error) {
    console.error("AI Question Generation Error:", error);

    // Handle specific OpenRouter API errors
    if (error.message && error.message.includes("401")) {
      return res.status(500).json({
        message: "Invalid OpenRouter API key. Check your .env file."
      });
    }
    if (error.message && error.message.includes("429")) {
      return res.status(429).json({
        message: "OpenRouter quota exceeded. Try again later."
      });
    }

    res.status(500).json({
      message: "Failed to generate questions. Please try again.",
      error: error.message
    });
  }
};

exports.importTriviaQuestions = async (req, res) => {
  try {
    const { examId } = req.params;
    const { amount = 5, category, difficulty } = req.body;

    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Build Open Trivia DB API URL
    let url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;
    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;

    const fetch = (await import("node-fetch")).default;
    const response = await fetch(url);
    const data = await response.json();

    if (data.response_code !== 0 || !data.results?.length) {
      return res.status(400).json({
        message: "No questions found. Try different settings."
      });
    }

    // Map trivia options to A, B, C, D format
    const answerMap = ["A", "B", "C", "D"];

    const savedQuestions = await Promise.all(
      data.results.map(async (q) => {
        // Decode HTML entities
        const decode = str => str
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"');

        // Shuffle incorrect + correct answers together
        const allOptions = [...q.incorrect_answers, q.correct_answer];
        // Sort to randomize position
        allOptions.sort(() => Math.random() - 0.5);

        const correctIndex = allOptions.indexOf(q.correct_answer);
        const correctLetter = answerMap[correctIndex];

        return Question.create({
          examId,
          questionText: decode(q.question),
          options: allOptions.map(opt => decode(opt)),
          correctAnswer: correctLetter
        });
      })
    );

    res.status(201).json({
      message: `Successfully imported ${savedQuestions.length} questions!`,
      count: savedQuestions.length,
      questions: savedQuestions
    });

  } catch (error) {
    console.error("Trivia import error:", error);
    res.status(500).json({
      message: "Failed to import questions",
      error: error.message
    });
  }
};

module.exports = {
  createExam,
  getAllExams,
  getAvailableExams: exports.getAvailableExams,
  getExamById: exports.getExamById,
  deleteExam,
  addQuestion: exports.addQuestion,
  generateAIQuestions: exports.generateAIQuestions,
  importTriviaQuestions: exports.importTriviaQuestions
};