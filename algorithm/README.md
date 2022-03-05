##### 이진탐색

#c샵
~~~c#
public class Program
{
    static void Main(string[] args)
    {
        var p = new Program();

        int[] i_array = { 1,2,3,4,5,6,7 };
        p.binary_search(i_array, 5, 0, 7);
    }
    int count = 0;
    public void binary_search(int[] array, int number, int min, int max)
    {
        count++;
        int middle = (min + max) / 2;
        if (number == array[middle])
        {
            Console.WriteLine($"count : {count}회, array[middle] : {array[middle]}");
        }
        else if (number < array[middle])
        {
            binary_search(array, number, min, middle - 1);
        }
        else if (number > array[middle])
        {
            binary_search(array, number, middle + 1, max);
        }
    }
}
~~~
