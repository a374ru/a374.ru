---

title:  Настройка Time Machine
# permalink: b
description:  Удаление ненужных файлов Time Machine

---


<div class="navi"><nav id="navi"><!-- js --></nav></div>

#  Удаление логов и ненужных файлов программы Time Machine

<span id="buki-img" class="img" onclick="imgResize()">![comp and vim ](assets/svg/comp.svg)</span>

#### Terminal, MacOSX

##  Удаление ненужных снапшотов с помощью терминала

Вы можете удалить локальные снимки `Time Machine` с помощью командной строки Терминала.

Откройте программу `Terminal.app`, и вставьте указанную ниже команду в окно и нажмите Enter.

```sh
    tmutil listlocalsnapshotdates
```

Вы увидите список имен резервных копий на вашем Mac.
Чтобы удалить любую из резервных копий, используйте следующую команду:

```sh
  ​tmutil deletelocalsnapshots ??? 
```

Где “???” нужно изменить на имя файла снимка резервной копии, который показал Терминал после первой команды. 


<br>


<span id="comp-end-img" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>
<!--ystm_start-->
<br>

 |||| 
 |:---|:---:|---:| 
 [← назад](twerdo-test-fontics.md)|[ 🔝 ](#)|[далее →](vedi-documents.md) 

 <br>
<!--ystm_end-->
