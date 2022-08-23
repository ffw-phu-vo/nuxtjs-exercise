<template>
  <ckeditor
    :editor="editor"
    :config="{ extraPlugins: [uploadPlugin] }"
    :value="value"
    @input="(event) => $emit('input', event)"
  />
</template>
<script>
// https://blowstack.com/blog/ckeditor-5-nuxt-integration/
let ClassicEditor;
let CKEditor;
// const uploadAdapter = (loader) => {
//   return {
//     upload: () => {
//       return new Promise((resolve, reject) => {
//         const body = new FormData();
//         loader.file.then((file) => {
//           body.append("media", file);
//           body.append("title", file.name);
//           httpClient
//             .post("/media", body)
//             .then((res) => {
//               // console.log('finished', res.data.url);
//               resolve({
//                 default: `${res.data.url}`,
//               });
//             })
//             .catch((err) => {
//               reject(err);
//             });
//         });
//       });
//     },
//   };
// };

// const uploadPlugin = (editor) => {
//   console.log(123);
//   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
//     return uploadAdapter(loader);
//   };
// };

if (process.client) {
  ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
  CKEditor = require("@ckeditor/ckeditor5-vue2");
} else {
  CKEditor = { component: { template: "<div></div>" } };
}

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  props: ["value"],
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  mounted() {
    // initial logic
    // Event listener
    // init javascript library
    console.log("2", this);
    // this.editorConfig = {
    //   extraPlugins: [uploadPlugin],
    // };
  },
  methods: {
    uploadPlugin: function (editor) {
      // const axios = this;
      console.log("1", this);
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return {
          upload: () => {
            // console.log("2", axios);
            return new Promise((resolve, reject) => {
              const body = new FormData();
              loader.file.then((file) => {
                body.append("media", file);
                body.append("title", file.name);
                axios
                  .$post("/media", body)
                  .then((res) => {
                    console.log("finished", res);
                    resolve({
                      default: `${res.data.url}`,
                    });
                  })
                  .catch((err) => {
                    reject(err);
                  });
              });
            });
          },
        };
      };
    },
  },
};
</script>
