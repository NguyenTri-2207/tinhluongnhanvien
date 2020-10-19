
    document.getElementById('tongtien').addEventListener('click', function (){
   
        let myName = document.getElementById("name").value;
        let maNv = document.getElementById("manhanvien").value;
        let gioLam = document.getElementById("time").value;
        let luongCb = document.getElementById("luong").value;
        let luong;
        if(document.getElementById('giamdoc').checked) {
           luong = luongCb * 3;
          }else if(document.getElementById('sep').checked) {
            luong = luongCb * 2;
          }else if(document.getElementById('nhanvien').checked){
            luong = luongCb *1;
          }

        if(gioLam>=120){
          gioLam=  document.getElementById('tongtienluong').innerHTML='xuất sắc';
        }else if(gioLam<120 && gioLam>=100){
            gioLam=  document.getElementById('tongtienluong').innerHTML='Giỏi';

        }else if(gioLam<100 && gioLam>=80){
            gioLam=  document.getElementById('tongtienluong').innerHTML='Khá';

        }else if(gioLam<80 && gioLam>=50){
            gioLam=  document.getElementById('tongtienluong').innerHTML='Trung bình';
        }else if(gioLam<50){
            gioLam=  document.getElementById('tongtienluong').innerHTML='Bị Đuổi Việc';
        }
        var tong ='Tên :'+ myName +'<br>' + 'Mã Nv :'+ maNv +'<br>'+ 'Tổng Lương :' + luong +'$'+'<br>' + 'Xếp loại :' +gioLam;
        document.getElementById('tongtienluong').innerHTML = tong;
        
    });
