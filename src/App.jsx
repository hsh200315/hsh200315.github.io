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
          limit: 12,
          exclude: { forks: false },
        },
        social: {
          linkedin: '',
          twitter: '',
          mastodon: '',
          facebook: '',
          instagram: '',
          youtube: '',
          dribbble: '',
          behance: '',
          medium: '',
          dev: '',
          stackoverflow: '',
          skype: '',
          telegram: '',
          website: '',
          phone: '',
          email: 'hsh200315@g.skku.edu',
        },
        skills: ['html', 'css', 'JavaScript', 'React.js', 'C'],
        experiences: [
          {
            position: 'President of SCAR',
            from: '2023. 09',
            to: 'Present',
          },
          {
            position: 'SSA',
            company: 'Team SOSD',
            from: '2023. 09',
            to: 'Present',
          },
          {
            position: 'SPARK: POP-IT',
            from: '2023. 09',
            to: 'Present',
          },
          {
            position: 'Summer Industry-Academic Cooperation Project',
            from: '2023. 07',
            to: '2023. 09',
          },
        ],
        education: [
          {
            degree: 'Introduction to Artificial Intelligence',
            from: '2023.09',
            to: 'Present',
          },
          {
            degree: 'Open Source Software Practice',
            from: '2023.09',
            to: 'Present',
          },
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
        certifications: [
          {
            name: 'SKKUTHON Grand Prize',
            year: '2023. 09',
          },
        ],
      }}
    />
  );
}

export default App;
