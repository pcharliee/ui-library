import { TextAndButton } from '../../lib/main';
var meta = {
    title: 'MOLECULES/TextAndButton',
    component: TextAndButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export var Primary = {
    args: {
        label: 'My text',
        variant: 'contained',
        onClick: function () { return console.log("Hello from text and button"); },
        text: 'Click me',
    },
};
