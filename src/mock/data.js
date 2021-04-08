import { nanoid } from 'nanoid';


// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'goodone3.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1ahruWpiS_JVfYiYVfiyHugcr0ELlRX7t/view?usp=sharing'// if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'myvino.jpeg',
    title: 'Vino',
    info: 'VINO was created as a place to be able to search for and save your favorite wines, all in one place. For the lovers of wine, and those who want to learn more about what styles of wine they like to drink.',
    info2: '',
    url: 'https://myvino.herokuapp.com/',
    repo: 'https://github.com/NPacha/VINO', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'letterscramble.jpeg',
    title: 'Letter Scramble',
    info: 'A simple letter game, inspired by the classic game of Scrabble, exercising the users vocabulary and allowing them to play against a second player. ',
    info2: '',
    url: 'https://npacha.github.io/Letter_Scramble/',
    repo: 'https://github.com/NPacha/Letter_Scramble', // if no repo, the button will not show up
  }
  // {
  //   id: nanoid(),
  //   img: 'nicoleschocolates.jpeg',
  //   title: 'Nicoles Chocolates',
  //   info: 'A mockup e-commerce chocolate shop (one of my many day dreams). Because chocolate makes almost everyone a little happier.',
  //   info2: '',
    
  //    // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nicolekpacha@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicolepacha/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NPacha',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
