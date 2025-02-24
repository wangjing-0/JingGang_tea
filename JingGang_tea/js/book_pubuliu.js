// 静态图片路径列表  
window.onload = function () { 
const imgList = [  
    "../imges/shuhua/陈字绘 人物故事册之一.jpg",  
    "../imges/shuhua/仇英绘 竹园品古图页.jpg",  
    "../imges/shuhua/春宴图.jpg",  
    "../imges/shuhua/丁观鹏绘 西园雅集图轴.jpg",  
    "../imges/shuhua/董邦达绘 钱陈群书 荷露烹茶诗成扇.jpg",  
  "../imges/shuhua/董邦达西苑千尺雪图卷.jpg",
  "../imges/shuhua/杜堇绘 古贤诗意图卷.jpg",
  "../imges/shuhua/弘历绘 竹炉山房图轴.jpg",
  "../imges/shuhua/黄庭坚书 奉同公择尚书咏茶碾煎啜三首.webp",
  "../imges/shuhua/金士松书 弘历品茶诗册.jpg",
  "../imges/shuhua/彭元瑞书 弘历《寒山千尺雪》诗册.jpg",
  "../imges/shuhua/唐寅绘 事茗图卷.jpg",
  "../imges/shuhua/停办贡茶碑拓片.jpg",
  "../imges/shuhua/托盏侍女图.jpg",
  "../imges/shuhua/文徵明绘 茶具十咏图轴.jpg",
  "../imges/shuhua/佚名绘 弘历观月图轴.jpg",
  "../imges/shuhua/佚名绘 清明上河图卷.jpg",
  "../imges/shuhua/张宏绘 试茗扇页.jpg"
  
  ];  

  // 获取容器  
  const container = document.getElementById("waterfallContainer");  

  // 动态生成图片元素并插入到容器中  
  imgList.forEach((img) => {  
    const imageBox = document.createElement("div");  
    imageBox.className = "image-box";  

    // 创建图片元素  
    const image = document.createElement("img");  
    image.src = img;  
    image.alt = "";  

    // 提取文件名作为标题  
    const fileName = img.split('/').pop().split('.')[0]; // 获取文件名（去掉路径和扩展名）  
    const title = document.createElement("div");  
    title.className = "title";  
    title.textContent = fileName;  

    // 将图片和标题添加到盒子中  
    imageBox.appendChild(image);  
    imageBox.appendChild(title);  
    container.appendChild(imageBox);  
  }); 
}; 