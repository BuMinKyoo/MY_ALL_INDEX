
##### - INotifyPropertyChanged
  - 인터페이스로써, 속성 값이 변경 되었을 때 알림을 준다. 예를 들어 디자인 폼에서 속성을 변경 했을때 백단의 데이터까지 바뀌게 해준다.

#.cs
~~~
public class Class1 : INotifyPropertyChanged
{
    private string m_Name;
    public string Name
    {
        get { return m_Name; }
        set
        {
            if(m_Name != value)
            {
                m_Name = value;
                Notify("Name");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

  - Notify("Name") : 처럼 바뀌었을때 알람을 주는 값을 넣어 준다
  - [CallerMemberName] : string, int 등 다양한 형식들을 지원해준다.
