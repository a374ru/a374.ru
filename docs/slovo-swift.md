---

title: SWift работа с датой 
description: SWift  – язык программирования. Последовательность работы с датой 

---

<div class="navi"><nav id="navi"><!-- js --></nav></div>

# Работа с датами. Начало…

<span id="comp-start-img" class="img" onclick="imgResize()">![image-top](assets/svg/comp-swift.svg)</span>

```swift
Development
```

### Последовательность программирования

В системе `MacOS` установлен календарь и это структура по умолчанию заполненная данными текущего дня. Данными такой структуры являются: число, месяц, год, временная зона и другие значения соответствующие системным настройкам данной локализации установленной пользователем в настройках.

Проядок написания кода, или блок-схема выглядит так:

<span id="comp-start-img" class="img" onclick="imgResize()">![image-top](https://img.a374.ru/swift-sequenses-3.png)</span>

Первым делом, вы должны создать **экземпляр** календаря. Далее инициализировать этот объект данными **текущей даты**.
По умолчанию данные даты – это `.свойства` текущего дня. С помощью функции `.component()` вы можете получать части этих данных, то есть свойства.
Чтобы получить данные другого дня требуется сначала их установить с помощью структуры `DateComponents()`. После этого данные установленного дня можно получать с помощью вышеперечисленных функций и производить с ними вычисления. 

В коде это выглядит так:

```swift
///экземпляр календаря установленный пользователем в системе macOS
let calendar = Calendar.current
```
Далее можно получать отдельные компоненты из текущей даты обращаясь к её свойству `.year`. То есть обращаемся к календарю, вызываем у него функцию `component()`, в параметрах функции указываем какое свойство нас интересует и из какой даты.  В приведённом ниже примере датой является переменная `currentDate`.

```swift
/// Получаем текущий год
let currentYear = calendar.component( .year, from: currentDate)
```

Далее создадим свою дату. Создадим структуру с данными и инициализируем новый экземпляр календаря с помощью метода `date()`

```swift
// Установка даты в 2099-м годе
let easter2099 = DateComponents( calendar: calendar,  year: 2099, month: 4, day: 12 )
// возвращается изготовленная дата календаря
let onedate = calendar.date(from: easter2099)
```

Теперь мы можем получать свойства из двух дат. Можем получать как один компонент, так и множество компонентов – они же свойства.

```swift
// Получение свойствa календаря по установленной дате `easter2099`
let cal = easter2099.calendar
let day = easter2099.day
let month = easter2099.month
let year = easter2099.year
let timeZ = easter2099.calendar?.localeе
```

Теперь давайте получим сразу много свайств c помощью :

```swift
// Получение свойст для вывода даты
let lotsOnadate = calendar.dateComponents( [.year,.month, .timeZone, .isLeapMonth], from: onedate!)
```

<span style="color: #a85a00;"> Далее, более подробное описание работы со временем можно найти в [документации](https://developer.apple.com/documentation/foundation/date).



<br>


<span id="comp-end-img" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>

<!--ystm_start-->
<br>

 |||| 
 |:---|:---:|---:| 
 [← назад](slovo-shell.md)|[ 🔝 ](#)|[далее →](tverdo-type.md) 

 <br>
<!--ystm_end-->
