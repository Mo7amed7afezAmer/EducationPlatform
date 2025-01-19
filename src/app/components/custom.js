import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class MyCustomButton extends Plugin {
  init() {
    const editor = this.editor;

    // Add the button to the toolbar
    editor.ui.componentFactory.add('myCustomButton', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Custom Button',
        withText: true, // Show the label as text in the button
        tooltip: true
      });

      // Add an action when the button is clicked
      view.on('execute', () => {
        // Define what happens when the button is clicked
        console.log('Custom button clicked!');
        editor.model.change(writer => {
          editor.model.insertContent(writer.createText('Custom Button Content!'));
        });
      });

      return view;
    });
  }
}
