const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());


// Create a new project
app.post('/projects', async (req, res) => {
  const { title, description, url } = req.body;
  try {
    const project = await prisma.project.create({
      data: { title, description, url },
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single project by ID
app.get('/projects/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a project by ID
app.patch('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  try {
    const project = await prisma.project.update({
      where: { id },
      data: { title, description, url },
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a project by ID
app.delete('/projects/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.project.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Skill CRUD operations

// Create a new skill
app.post('/skills', async (req, res) => {
  const { name, level, description } = req.body;
  try {
    const skill = await prisma.skill.create({
      data: { name, level, description },
    });
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all skills
app.get('/skills', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single skill by ID
app.get('/skills/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await prisma.skill.findUnique({
      where: { id },
    });
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a skill by ID
app.patch('/skills/:id', async (req, res) => {
  const { id } = req.params;
  const { name, level, description } = req.body;
  try {
    const skill = await prisma.skill.update({
      where: { id },
      data: { name, level, description },
    });
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a skill by ID
app.delete('/skills/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.skill.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//////////////////////
