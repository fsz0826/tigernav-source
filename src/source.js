window.onbeforeunload = () => {
  const string = JSON.stringify(XXX.hashMap);
  localStorage.setItem("site", string);
};
const site = localStorage.getItem("site");
const siteObject = JSON.parse(site);
console.log(siteObject)
const XXX = {
  hashMap:siteObject || [
    {logo: "A", url: "https://www.acfun.cn"},
    {logo: "B", url: "https://www.bilibili.com"},
    {logo: "F", url: "https://www.figma.com/"},
    {logo: "I", url: "https://www.iconfont.cn/"},
  ],
  //
  // 错误想法  数据分开就无法使用 v-for
  // logo:[],
  // url:[],
  // getSource(){
  //   this.hashMap.forEach((node,)=>{
  //     this.logo.push(node.logo)
  //     this.url.push(node.url)
  //   })
  // }
  //
  simplifyUrl(url) {
    return url
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "")
      .replace(/\/.*/, ""); //删除‘/’开头的内容
  },
  add(){
    let url = window.prompt("请输入新的地址");
    if (!url) {
      return;
    }
    if (url.indexOf("http") !== 0) {
      url = "https://" + url;
    }
    console.log(url);
    this.hashMap.push({
      logo: this.simplifyUrl(url)[0],
      url: url,
    });
  },
  remove(index) {
      this.hashMap.splice(index, 1);
  }
}

// XXX.getSource()
export default XXX