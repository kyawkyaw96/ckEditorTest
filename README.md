# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- using ckeditor online build and vite react -->

{

<!-- npm create vite@latest Project-name -- --template react -->

npm create vite@latest Project-name -- --template react

<!-- tailwindcss install -->

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss -p

<!-- ckeditor5-react install -->

npm install @ckeditor/ckeditor5-react @ckeditor/ckeditor5-editor-classic

<!-- Cannot read properties of undefined (reading 'create') -->

run =npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic

<!-- note -->

put zip build file into src>ckeditor5-custom-build>(zip build file) <!-- have many error and only use top command -->


<!-- usage and import -->
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
<!-- note -->

}

npm
