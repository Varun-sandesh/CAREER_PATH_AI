const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export async function submitQuestionnaire(data: any) {
  const response = await fetch(`${API_BASE_URL}/questionnaire`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit questionnaire');
  }
  
  return response.json();
}

export async function getCareerGuidance() {
  const response = await fetch(`${API_BASE_URL}/career-guidance`);
  
  if (!response.ok) {
    throw new Error('Failed to get career guidance');
  }
  
  return response.json();
}

export async function getUserProgress() {
  const response = await fetch(`${API_BASE_URL}/progress`);
  
  if (!response.ok) {
    throw new Error('Failed to get user progress');
  }
  
  return response.json();
}

export async function submitContactForm(data: any) {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }
  
  return response.json();
}

export async function sendChatMessage(message: string, careerRole?: string) {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message, careerRole })
  });

  if (!response.ok) {
    throw new Error('Failed to send chat message');
  }

  return response.json();
}