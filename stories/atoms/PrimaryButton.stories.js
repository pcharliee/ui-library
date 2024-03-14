import { PrimaryButton } from '../../lib/main';
var meta = {
    title: 'ATOMS/Button',
    component: PrimaryButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export var Primary = {
    args: {
        variant: 'contained',
        onClick: function () { return console.log("Hello from button"); },
        text: 'Button',
    },
};
