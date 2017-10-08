<?php
/*
  array (size=1)
  'file' =>
    array (size=5)
      'name' => string 'about us.jpg' (length=12)
      'type' => string 'image/jpeg' (length=10)
      'tmp_name' => string 'D:\wamp64\tmp\php6A4A.tmp' (length=25)
      'error' => int 0
      'size' => int 1557125
 * */
class upload{
    private $filename = "file";
    private $data;
    private $type="image/jpeg;image/png;image/gif";
    private $size;
    private $rootdir="temp";
    private $date;
    private $name;
    private $dir;
    function __construct(){
        $this->size = 1024*1024*100;
    }
    public function up(){
        //1、接收
        $this->accept();
        //2、检查
        $this->check();
        //3、创建目录
        $this->mkdirs();
        //4、移动目录
        $this->move();
    }
    private function accept(){
        $this->data = $_FILES[$this->filename];
    }
    private function check(){
        //判断指定的文件是否是通过 HTTP POST 上传的。
        if (is_uploaded_file($this->data['tmp_name'])){
            if ($this->data['size'] < $this->size && strrchr($this->type,$this->data['type'])){
                return true;
            }
        }
        return false;
    }
    private function mkdirs(){
        //1、判断根目录是否存在
        if (!is_dir("$this->rootdir")){
            mkdir("temp",true);
        }
        //2、判断当天目录
        $this->date=date('y-m-d');
        if (!is_dir("$this->rootdir"."/"."$this->date")){
            mkdir("$this->rootdir"."/"."$this->date",true);
        };
        //3、创建文件名称
        $this->name=time().round(0,10000).$this->data['name'];
        //4、完整路径
        echo $this->dir="$this->rootdir".'/'."$this->date".'/'."$this->name";
    }
    private function move(){
        move_uploaded_file($this->data['tmp_name'],"$this->dir");
    }
}