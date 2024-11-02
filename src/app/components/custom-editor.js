// components/custom-editor.js
'use client' // only in App Router


import { CKEditor } from '@ckeditor/ckeditor5-react';
import { 
    ClassicEditor,
    Bold, 
    Essentials, 
    Italic, 
    Mention, 
    Paragraph, 
    Undo, 
    Alignment, 
    Heading, 
    FontFamily, 
    FontColor,
    SourceEditing
} from 'ckeditor5';
import MathType from '@wiris/mathtype-ckeditor5/dist/index.js';

import 'ckeditor5/ckeditor5.css';

function CustomEditor(props) {
    return (
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                toolbar: {
                    items: [
                        'SourceEditing',
                        '|',
                        'undo', 'redo',
                        '|',
                        'heading',
                        '|',
                        'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                        '|',
                        'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                        '|',
                        'link', 'uploadImage', 'blockQuote', 'codeBlock',
                        '|',
                        'alignment',
                        '|',
                        'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                        '|',
                        'mathtype'
                    ],
                    shouldNotGroupWhenFull: true
                },
                plugins: [
                    Bold,
                    Essentials, 
                    Italic, 
                    Mention, 
                    Paragraph, 
                    Undo, 
                    MathType, 
                    Alignment, 
                    Heading,
                    FontFamily,
                    FontColor,
                    MathType,
                    SourceEditing
                ],
                mention: { 
                    // Mention configuration
                },
                initialData: props.editorData
            } }
        />
    );
}

export default CustomEditor;
