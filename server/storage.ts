import { users, simulations, studentProgress, simulationSessions, quizQuestions, type User, type InsertUser, type Simulation, type StudentProgress, type SimulationSession, type QuizQuestion } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Simulation methods
  getAllSimulations(): Promise<Simulation[]>;
  getSimulation(id: number): Promise<Simulation | undefined>;
  createSimulation(simulation: Omit<Simulation, 'id'>): Promise<Simulation>;

  // Student Progress methods
  getStudentProgress(userId: number): Promise<StudentProgress[]>;
  getStudentProgressForSimulation(userId: number, simulationId: number): Promise<StudentProgress | undefined>;
  createStudentProgress(progress: Omit<StudentProgress, 'id'>): Promise<StudentProgress>;
  updateStudentProgress(id: number, progress: Partial<StudentProgress>): Promise<StudentProgress | undefined>;

  // Simulation Session methods
  getActiveSession(userId: number): Promise<SimulationSession | undefined>;
  createSession(session: Omit<SimulationSession, 'id'>): Promise<SimulationSession>;
  updateSession(id: number, session: Partial<SimulationSession>): Promise<SimulationSession | undefined>;
  endSession(id: number): Promise<void>;

  // Quiz methods
  getQuizQuestions(simulationId: number): Promise<QuizQuestion[]>;
  createQuizQuestion(question: Omit<QuizQuestion, 'id'>): Promise<QuizQuestion>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private simulations: Map<number, Simulation>;
  private studentProgress: Map<number, StudentProgress>;
  private simulationSessions: Map<number, SimulationSession>;
  private quizQuestions: Map<number, QuizQuestion>;
  private currentUserId: number;
  private currentSimulationId: number;
  private currentProgressId: number;
  private currentSessionId: number;
  private currentQuizId: number;

  constructor() {
    this.users = new Map();
    this.simulations = new Map();
    this.studentProgress = new Map();
    this.simulationSessions = new Map();
    this.quizQuestions = new Map();
    this.currentUserId = 1;
    this.currentSimulationId = 1;
    this.currentProgressId = 1;
    this.currentSessionId = 1;
    this.currentQuizId = 1;

    this.initializeData();
  }

  private initializeData() {
    // Create default simulations
    const defaultSimulations = [
      {
        id: 1,
        type: 'ransomware',
        title: 'Ransomware Attack',
        description: 'Learn to identify and respond to ransomware attacks through a safe, controlled simulation.',
        duration: 15,
        riskLevel: 'high',
        isActive: true,
        config: {
          countdownStart: 200,
          bitcoinAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
          encryptionProgress: 45
        }
      },
      {
        id: 2,
        type: 'phishing',
        title: 'Phishing Email',
        description: 'Practice identifying suspicious emails and social engineering attempts.',
        duration: 10,
        riskLevel: 'medium',
        isActive: true,
        config: {}
      },
      {
        id: 3,
        type: 'windows-update',
        title: 'Fake Windows Update',
        description: 'Experience a realistic fake Windows update and learn to identify malicious software.',
        duration: 8,
        riskLevel: 'high',
        isActive: true,
        config: {}
      },
      {
        id: 4,
        type: 'system-warning',
        title: 'Fake System Warning',
        description: 'Learn to recognize and handle fake security warnings and tech support scams.',
        duration: 12,
        riskLevel: 'high',
        isActive: true,
        config: {}
      },
      {
        id: 5,
        type: 'powershell-ransomware',
        title: 'PowerShell Ransomware',
        description: 'Experience a realistic PowerShell-based ransomware attack simulation.',
        duration: 18,
        riskLevel: 'critical',
        isActive: true,
        config: {
          countdownStart: 200,
          bitcoinAddress: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
          scriptBased: true
        }
      },
      {
        id: 6,
        type: 'worm',
        title: 'Network Worm',
        description: 'See how worms spread across networks and compromise multiple systems.',
        duration: 15,
        riskLevel: 'high',
        isActive: true,
        config: {}
      },
      {
        id: 7,
        type: 'botnet',
        title: 'Botnet Control',
        description: 'Understand how botnets are controlled and used for malicious activities.',
        duration: 20,
        riskLevel: 'critical',
        isActive: true,
        config: {}
      },
      {
        id: 8,
        type: 'cryptominer',
        title: 'Cryptominer Malware',
        description: 'Experience how cryptominers hijack system resources for cryptocurrency mining.',
        duration: 12,
        riskLevel: 'high',
        isActive: true,
        config: {}
      },
      {
        id: 9,
        type: 'trojan',
        title: 'Trojan Horse',
        description: 'Learn how trojans disguise themselves and provide remote access to attackers.',
        duration: 16,
        riskLevel: 'high',
        isActive: true,
        config: {}
      },
      {
        id: 10,
        type: 'spyware',
        title: 'Spyware Surveillance',
        description: 'Understand how spyware monitors and collects personal information.',
        duration: 14,
        riskLevel: 'high',
        isActive: true,
        config: {}
      },
      {
        id: 11,
        type: 'adware',
        title: 'Adware Infection',
        description: 'See how adware injects unwanted advertisements and affects browsing.',
        duration: 8,
        riskLevel: 'medium',
        isActive: true,
        config: {}
      }
    ];

    defaultSimulations.forEach(sim => {
      this.simulations.set(sim.id, sim);
      this.currentSimulationId = Math.max(this.currentSimulationId, sim.id + 1);
    });

    // Create default quiz questions
    const defaultQuestions = [
      {
        id: 1,
        simulationId: 1,
        question: 'What should you do if you receive a suspicious email?',
        options: ['Click all links to investigate', 'Delete immediately without reading', 'Report to IT and avoid clicking links'],
        correctAnswer: 2,
        explanation: 'Always report suspicious emails to IT and never click on unknown links as they could contain malware.'
      }
    ];

    defaultQuestions.forEach(q => {
      this.quizQuestions.set(q.id, q);
      this.currentQuizId = Math.max(this.currentQuizId, q.id + 1);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date(),
      isTeacher: insertUser.isTeacher || false
    };
    this.users.set(id, user);
    return user;
  }

  async getAllSimulations(): Promise<Simulation[]> {
    return Array.from(this.simulations.values()).filter(sim => sim.isActive);
  }

  async getSimulation(id: number): Promise<Simulation | undefined> {
    return this.simulations.get(id);
  }

  async createSimulation(simulation: Omit<Simulation, 'id'>): Promise<Simulation> {
    const id = this.currentSimulationId++;
    const newSim: Simulation = { ...simulation, id };
    this.simulations.set(id, newSim);
    return newSim;
  }

  async getStudentProgress(userId: number): Promise<StudentProgress[]> {
    return Array.from(this.studentProgress.values()).filter(p => p.userId === userId);
  }

  async getStudentProgressForSimulation(userId: number, simulationId: number): Promise<StudentProgress | undefined> {
    return Array.from(this.studentProgress.values()).find(p => p.userId === userId && p.simulationId === simulationId);
  }

  async createStudentProgress(progress: Omit<StudentProgress, 'id'>): Promise<StudentProgress> {
    const id = this.currentProgressId++;
    const newProgress: StudentProgress = { ...progress, id };
    this.studentProgress.set(id, newProgress);
    return newProgress;
  }

  async updateStudentProgress(id: number, progress: Partial<StudentProgress>): Promise<StudentProgress | undefined> {
    const existing = this.studentProgress.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...progress };
    this.studentProgress.set(id, updated);
    return updated;
  }

  async getActiveSession(userId: number): Promise<SimulationSession | undefined> {
    return Array.from(this.simulationSessions.values()).find(s => s.userId === userId && s.isActive);
  }

  async createSession(session: Omit<SimulationSession, 'id'>): Promise<SimulationSession> {
    const id = this.currentSessionId++;
    const newSession: SimulationSession = { 
      ...session, 
      id,
      startedAt: new Date()
    };
    this.simulationSessions.set(id, newSession);
    return newSession;
  }

  async updateSession(id: number, session: Partial<SimulationSession>): Promise<SimulationSession | undefined> {
    const existing = this.simulationSessions.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...session };
    this.simulationSessions.set(id, updated);
    return updated;
  }

  async endSession(id: number): Promise<void> {
    const session = this.simulationSessions.get(id);
    if (session) {
      session.isActive = false;
      session.endedAt = new Date();
      this.simulationSessions.set(id, session);
    }
  }

  async getQuizQuestions(simulationId: number): Promise<QuizQuestion[]> {
    return Array.from(this.quizQuestions.values()).filter(q => q.simulationId === simulationId);
  }

  async createQuizQuestion(question: Omit<QuizQuestion, 'id'>): Promise<QuizQuestion> {
    const id = this.currentQuizId++;
    const newQuestion: QuizQuestion = { ...question, id };
    this.quizQuestions.set(id, newQuestion);
    return newQuestion;
  }
}

export const storage = new MemStorage();
