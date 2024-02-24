// pring vovels from arays object
a=[
    {name:'vishnu',age:25},{name:'mahendra',age:25},{name:'hemanth',age:25}
]
for(k of a){
    str=k['name']
    for(i=0;i<str.length;i++){
        if(/[aeiou]/gi.test(str[i])){
        console.log(str[i])
        }
    }
   
}

