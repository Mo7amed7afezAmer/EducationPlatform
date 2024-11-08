import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	BlockToolbar,
	Bold,
	Essentials,
	FullPage,
	GeneralHtmlSupport,
	Heading,
	HtmlComment,
	HtmlEmbed,
	Indent,
	IndentBlock,
	Italic,
	Link,
	Paragraph,
	SelectAll,
	ShowBlocks,
	SourceEditing,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	Undo,
    Alignment
} from 'ckeditor5';
import MathType from '@wiris/mathtype-ckeditor5/dist/index.js';

import 'ckeditor5/ckeditor5.css';
import './custom.css';

export default function CustomEditor(props) {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

    // console.log(editorContainerRef);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'sourceEditing',
				'showBlocks',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'insertTable',
				'blockQuote',
				'htmlEmbed',
				'|',
				'outdent',
				'indent',
                "|",
                "alignment", "mathType"
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Autoformat,
			Autosave,
			BalloonToolbar,
			BlockQuote,
			BlockToolbar,
			Bold,
			Essentials,
			FullPage,
			GeneralHtmlSupport,
			Heading,
			HtmlComment,
			HtmlEmbed,
			Indent,
			IndentBlock,
			Italic,
			Link,
			Paragraph,
			SelectAll,
			ShowBlocks,
			SourceEditing,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			Underline,
			Undo,
            Alignment,
            MathType
		],
		balloonToolbar: ['bold', 'italic', '|', 'link', "|", "alignment"],
		blockToolbar: ['bold', 'italic', '|', 'link', 'insertTable', '|', 'outdent', 'indent'],
		language: {
            // The UI will be English.
            ui: 'en',

            // But the content will be edited in Arabic.
            content: 'ar'
        },
        heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		htmlSupport: {
			allow: [
				{
					name: /^.*$/,
					styles: true,
					attributes: true,
					classes: true
				}
			]
		},
		initialData: props.editorData,
        link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		}
	};

	return (
		<div>
			<div className="main-container">
				<div className="editor-container editor-container_classic-editor editor-container_include-block-toolbar" ref={editorContainerRef}>
					<div className="editor-container__editor">
						<div ref={editorRef}>
							{isLayoutReady && 
							<CKEditor editor={ClassicEditor} config={editorConfig} onChange={(event, editor) => props.updateEditorData(editor.getData())}/>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
