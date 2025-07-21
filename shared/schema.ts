import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isTeacher: boolean("is_teacher").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const simulations = pgTable("simulations", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'ransomware', 'phishing', 'social-engineering'
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(), // in minutes
  riskLevel: text("risk_level").notNull(), // 'high', 'medium', 'low'
  isActive: boolean("is_active").default(true),
  config: json("config"), // simulation-specific configuration
});

export const studentProgress = pgTable("student_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  simulationId: integer("simulation_id").notNull(),
  completed: boolean("completed").default(false),
  score: integer("score").default(0), // percentage score
  completedAt: timestamp("completed_at"),
  timeSpent: integer("time_spent"), // in seconds
});

export const simulationSessions = pgTable("simulation_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  simulationId: integer("simulation_id").notNull(),
  isActive: boolean("is_active").default(true),
  startedAt: timestamp("started_at").defaultNow(),
  endedAt: timestamp("ended_at"),
  sessionData: json("session_data"), // current state of simulation
});

export const quizQuestions = pgTable("quiz_questions", {
  id: serial("id").primaryKey(),
  simulationId: integer("simulation_id").notNull(),
  question: text("question").notNull(),
  options: json("options").notNull(), // array of answer options
  correctAnswer: integer("correct_answer").notNull(), // index of correct option
  explanation: text("explanation"),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertSimulationSchema = createInsertSchema(simulations).omit({ id: true });
export const insertStudentProgressSchema = createInsertSchema(studentProgress).omit({ id: true });
export const insertSimulationSessionSchema = createInsertSchema(simulationSessions).omit({ id: true });
export const insertQuizQuestionSchema = createInsertSchema(quizQuestions).omit({ id: true });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Simulation = typeof simulations.$inferSelect;
export type StudentProgress = typeof studentProgress.$inferSelect;
export type SimulationSession = typeof simulationSessions.$inferSelect;
export type QuizQuestion = typeof quizQuestions.$inferSelect;
