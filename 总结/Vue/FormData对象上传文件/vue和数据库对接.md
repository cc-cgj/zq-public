# FormData使用方法详解

```js
FormData的主要用途有两个：
1、将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。
2、异步上传文件
一、创建formData对象
1、创建一个空对象：

```

```js
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//可以通过append()方法来追加数据
formdata.append("name","laotie");
//通过get方法对值进行读取
console.log(formdata.get("name"));//laotie
//通过set方法对值进行设置
formdata.set("name","laoliu");
console.log(formdata.get("name"));//laoliu
```

###### 2、通过表单对formData进行初始化

创建表单：

```js
<form id="advForm">
    <p>广告名称：<input type="text" name="advName"  value="xixi"></p>
    <p>广告类别：<select name="advType">
        <option value="1">轮播图</option>
        <option value="2">轮播图底部广告</option>
        <option value="3">热门回收广告</option>
        <option value="4">优品精选广告</option>
    </select></p>
    <p><input type="button" id="btn" value="添加"></p>
</form>
```

通过表单元素作为参数，实现对formData的初始化：

```js
//获得表单按钮元素
var btn=document.querySelector("#btn");
//为按钮添加点击事件
btn.onclick=function(){
    //根据ID获得页面当中的form表单元素
    var form=document.querySelector("#advForm");
    //将获得的表单元素作为参数，对formData进行初始化
    var formdata=new FormData(form);
    //通过get方法获得name为advName元素的value值
    console.log(formdata.get("advName"));//xixi
    //通过get方法获得name为advType元素的value值
    console.log(formdata.get("advType"));//1 
}
```

#### 二、操作方法

###### 1、通过get(key)与getAll(key)来获取相对应的值

```js
// 获取key为age的第一个值
formdata.get("age"); 
 // 获取key为age的所有值，返回值为数组类型
formdata.getAll("age");
```

2、通过append(key,value)在数据末尾追加数据

```js
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
//通过append()方法在末尾追加key为name值为laoli的数据
formdata.append("name","laoli");
//通过append()方法在末尾追加key为name值为laotie的数据
formdata.append("name","laotie");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoliu
//通过getAll方法读取key为name的所有值
console.log(formdata.getAll("name"));//["laoliu", "laoli", "laotie"]
```

###### 3、通过set(key, value)来设置修改数据

key的值不存在，会添加一条数据

```js
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//如果key的值不存在会为数据添加一个key为name值为laoliu的数据
formdata.set("name","laoli");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoli
```

key的值存在，会修改对应的value值

```js
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
//通过append()方法在末尾追加key为name值为laoliu2的数据
formdata.append("name","laoliu2");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoliu
//通过getAll方法读取key为name的所有值
console.log(formdata.getAll("name"));//["laoliu", "laoliu2"]

//将存在的key为name的值修改为laoli
formdata.set("name","laoli");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoli
//通过getAll方法读取key为name的所有值
console.log(formdata.getAll("name"));//["laoli"]
```

4、通过has(key)来判断是否存在对应的key值

```js
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
//判断是否包含key为name的数据
console.log(formdata.has("name"));//true
//判断是否包含key为age的数据
console.log(formdata.has("age"));//false
```

5、通过delete(key)可以删除数据

```js
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
console.log(formdata.get("name"));//laoliu
//删除key为name的值
formdata.delete("name");
console.log(formdata.get("name"));//null
```

#### 三、通过XMLHttpRequest发送数据

```js
<form id="advForm">
    <p>广告名称：<input type="text" name="advName" value="xixi"></p>
    <p>广告类别：<select name="advType">
        <option value="1">轮播图</option>
        <option value="2">轮播图底部广告</option>
        <option value="3">热门回收广告</option>
        <option value="4">优品精选广告</option>
    </select></p>
    <p>广告图片：<input type="file" name="advPic"></p>
    <p>广告地址：<input type="text" name="advUrl"></p>
    <p>广告排序：<input type="text" name="orderBy"></p>
    <p><input type="button" id="btn" value="添加"></p>
</form>
```

```js
var btn=document.querySelector("#btn");
btn.onclick=function(){
    var formdata=new FormData(document.getElementById("advForm"));
    var xhr=new XMLHttpRequest();
    xhr.open("post","http://127.0.0.1/adv");
    xhr.send(formdata);
    xhr.onload=function(){
        if(xhr.status==200){
            //...
        }
    }
}
```

上传文件

```js
<template lang="pug">
  div
    input(type="file", ref="yin")
    button(@click="submit()") 点击上传
</template>
<script>
  export default{
    methods: {
      submit(){
        let formdata = new FormData();
        formdata.append('file', this.$refs.yin.files[0]);
          let config = {
            headers: {
                'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
            }
        };
        var formdata = new FormData()
                    formdata.append("file", this.$refs.fs.files["0"])
                    axios.post("http://localhost/data.php", formdata, config).then(res => {
                        console.log(res)
         })
      }
    }
  }
</script>
```

php 





```
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 2017/11/23
 * Time: 10:57
 */
header("Access-Control-Allow-Origin:*");
// 响应类型
header('Access-Control-Allow-Methods:POST');
// 响应头设置
header('Access-Control-Allow-Headers:x-requested-with, content-type');
header("Content-type: text/html; charset=utf-8");
$file = $_FILES["file"];
if ($file["error"] > 0) {
    echo "错误：" . $file["error"];
} else {
    $name = iconv('utf-8', 'gb2312', "upload/" . $file["name"]);
    echo "文件名称：" . $file["name"] . "</br>";
    echo "文件类型：" . $file["type"] . "</br>";
    echo "文件大小：" . ($file["size"] / 1024) . "K</br>";
    echo "文件临时存储的位置：" . $file["tmp_name"] . "</br>";
 
 
    //保存上传的文件
    if (file_exists("upload" . $file["name"])) {
        echo $file["name"] . "文件已经存在";
    } else {
        //如果目录不存在则将该文件上传
        if (move_uploaded_file($file['tmp_name'], $name)) {
            move_uploaded_file($file['tmp_name'], "upload/" . $file["name"]);
        }
    }
}
```

