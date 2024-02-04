const request = require('supertest');
const app = require('../app'); 
describe('Task Controller', () => {
  let taskId;

  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        priority: 'High',
        status: 'Todo',
        description: 'Test description',
        createdBy: 'John Doe',
        deadline: '2024-02-10',
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Test Task');
    taskId = response.body._id;
  });

  it('should get all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a task by ID', async () => {
    const response = await request(app).get(`/api/tasks/${taskId}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toBe(taskId);
  });

  it('should update a task by ID', async () => {
    const response = await request(app)
      .put(`/api/tasks/${taskId}`)
      .send({ title: 'Updated Task' });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Updated Task');
  });

  it('should delete a task by ID', async () => {
    const response = await request(app).delete(`/api/tasks/${taskId}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toBe(taskId);
  });
});
