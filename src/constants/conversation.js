export const InputTypes = {
  TEXT: 'text',
  SELECT: 'select',
  CUSTOM: 'custom',
};

export const CustomInputTypes = {
  ACTIVE: 'active',
  ALLERGIES: 'allergies',
};

export const ConversationSchema = [{
  key: 'intro',
  text: 'Hey! We’re going to ask you a few questions about your dog(s) so we can curate supplements personalized just for them!',
}, {
  key: 'name',
  text: 'Let’s get started. What’s your name?',
  secondary: true,
  type: InputTypes.TEXT,
}, {
  key: 'dogs',
  text: 'Nice to meet you {name}! How many dogs do you have?',
  type: InputTypes.TEXT,
}, {
  key: 'dog.name',
  text: 'What is your dogs name?',
  type: InputTypes.TEXT,
}, {
  key: 'dog.gender',
  text: 'What is {dog.name}’s gender?',
  type: InputTypes.SELECT,
  options: [{
    label: 'Girl',
    value: 'girl',
  }, {
    label: 'Boy',
    value: 'boy',
  }],
}, {
  key: 'dog.spayed',
  text: '{dog.name} is',
  type: InputTypes.SELECT,
  options: [{
    label: 'Spayed',
    value: true,
  }, {
    label: 'Not Spayed',
    value: false,
  }],
}, {
  key: 'dog.active',
  text: 'How active would you say {dog.name} is?',
  type: InputTypes.CUSTOM,
  subtype: CustomInputTypes.ACTIVE,
}, {
  key: 'dog.photo',
  image: 'https://millenroadanimalhospital.com/wp-content/uploads/2019/03/Dogs.jpg',
}, {
  key: 'detail_intro',
  text: 'Aww a lazy pup! Almost done now moving on to the details.',
}, {
  key: 'dog.has_allergies',
  text: 'Does {dog.name} have any allergies?',
  type: InputTypes.SELECT,
  options: [{
    label: 'Yes',
    value: true,
  }, {
    label: 'No',
    value: false,
  }],
}, {
  key: 'dog.allergies',
  text: 'Poor.{dog.name}! Select her known allergies.',
  type: InputTypes.CUSTOM,
  subtype: CustomInputTypes.ALLERGIES,
}];
