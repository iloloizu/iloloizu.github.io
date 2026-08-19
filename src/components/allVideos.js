// Software-development videos from youtube.com/@IloloIzu.
// Thumbnails come straight from YouTube's CDN by video id.
const video = (id, title) => ({
  id,
  title,
  link: `https://www.youtube.com/watch?v=${id}`,
  thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
})

const allVideos = [
  video('8Nf_qdXVRZE', 'How I became a Software Engineer in 7 months (first week on the job in New York)'),
  video('q-a-LF8LQ2I', 'I Got a New SWE Job in 3 Months | The Coding Chronicles Daily Vlog'),
  video('U_NbPvapGZA', 'Why I Switched from Medicine to Software Engineering'),
  video('K6Vgyjee3xo', 'I got laid off... Software Engineering Vlog'),
  video('XtrrKIv_oNk', 'Life as a Software Engineer | The Coding Chronicles 002'),
  video('3xJUbAXWe6Y', '5 Habits to Becoming a Successful Software Engineer'),
  video('kI3fCZ7e2PA', 'A Realistic Day in the Life of a Software Engineer - The Coding Chronicles 001'),
  video('cN__hNw8_e4', 'Software Engineering Vlog - Is a Coding Bootcamp Worth It in 2022?'),
  video('v_6QMVB81M8', 'Four Steps to Help You Land Your First Software Engineering Job'),
  video('Y6NU9sKdK5E', 'A Day in the Life of a Junior Software Engineer working from home'),
]

export default allVideos
