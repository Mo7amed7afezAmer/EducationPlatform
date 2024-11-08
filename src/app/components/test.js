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
    SourceEditing,
    Table,
    MediaEmbed,
} from 'ckeditor5';
import MathType from '@wiris/mathtype-ckeditor5/dist/index.js';

import 'ckeditor5/ckeditor5.css';
import './custom.css'

function CustomEditor(props) {
    return (
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                language: {
                    // The UI will be English.
                    ui: 'en',
        
                    // But the content will be edited in Arabic.
                    content: 'ar'
                },
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
                        'alignment', "insertTable", "mediaEmbed",
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
                    SourceEditing,
                    Table,
                    MediaEmbed,
                ],
                mention: { 
                    // Mention configuration
                },
                initialData: "<textarea><p>content</p></textarea>"
            } }
        />
    );
}

export default CustomEditor;
