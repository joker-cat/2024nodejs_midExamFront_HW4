import{_ as c,a as d,c as p,d as e,w as h,i as u,s as m,o as f,p as g,j as _}from"./index-Dk3uvtnX.js";const b={data(){return{image:"",content:"",file:""}},computed:{...d(m,["getUserState"])},methods:{handleFileUpload(){this.file=this.$refs.file.files[0];const t=new FileReader;t.addEventListener("load",this.imageLoaded),t.readAsDataURL(this.file)},imageLoaded(t){this.image=t.target.result},async updateImage(){const t=new FormData;return t.append("image",this.file),t.append("album","GyuOpeD"),await this.$http.post("https://api.imgur.com/3/image",t,{headers:{Authorization:"Bearer e0d3586d25b4a34a016d23f70ae8012a752a402b"}})},async pushArticle(){if(this.image.trim()===""||this.content.trim()===""){alert("請填寫完整內文及圖片");return}try{const r={image:(await this.updateImage()).data.data.link,content:this.content,user:this.getUserState._id};(await this.$http.post("http://localhost:3005/post",r)).statusText==="OK"&&(this.image="",this.content="",this.file="",alert("新增成功"),this.$router.push("/"))}catch(t){console.error(t)}}}},n=t=>(g("data-v-a6b8feb0"),t=t(),_(),t),w={class:"post-content"},x=n(()=>e("div",{class:"title"},[e("h2",{class:"text-center"},"張貼動態"),e("div",{class:"empty-bg"})],-1)),I={class:"create"},v=n(()=>e("p",{class:"create-depiction"},"貼文內容",-1)),U=n(()=>e("label",{for:"fileInput",class:"input-btn"},"選擇圖片",-1)),k=["src"];function y(t,a,r,l,o,i){return f(),p("div",w,[x,e("div",I,[v,h(e("textarea",{name:"textarea-font",id:"textarea",cols:"30",rows:"10","onUpdate:modelValue":a[0]||(a[0]=s=>o.content=s)},null,512),[[u,o.content]]),e("input",{type:"file",name:"file",class:"d-none",id:"fileInput",ref:"file",onChange:a[1]||(a[1]=(...s)=>i.handleFileUpload&&i.handleFileUpload(...s))},null,544),U,e("img",{class:"show-image w-100",src:o.image,alt:"要上傳的圖片"},null,8,k),e("button",{type:"button",class:"create-post d-block text-center mx-auto",onClick:a[2]||(a[2]=(...s)=>i.pushArticle&&i.pushArticle(...s))}," 送出貼文 ")])])}const A=c(b,[["render",y],["__scopeId","data-v-a6b8feb0"]]);export{A as default};
