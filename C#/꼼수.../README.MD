##### 꼼수 : 승격을 이용하여double number = 123.456 을 소수점 첫째 자리만 나타내기

~~~c#
double average = 0;
double number = 123.456;
average = (int)(number * 10) / 10.0; //123.4 
~~~
