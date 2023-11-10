import config from '../gitprofile.config';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'hsh200315',
          sortBy: 'stars',
          limit: 8,
          exclude: { forks: false },
        },
        skills: ['html', 'css', 'JavaScript', 'React.js', 'C'],
        education: [
          {
            institution: 'Major: Computer Science and Engineering',
            degree: 'Sungkyunkwan University',
            from: '2020',
            to: 'Present',
          },
          {
            degree: 'Inje High School',
            from: '2017',
            to: '2019',
          },
        ],
      }}
    />
  );
}

export default App;
