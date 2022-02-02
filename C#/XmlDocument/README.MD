
##### - XmlDocument다루기
  - XmlDocument 클래스를 이용해 XML 작성하기

~~~
// See https://aka.ms/new-console-template for more information
using System.Text;
using System.Xml;

// XmlDocument 객체 생성
XmlDocument doc = new XmlDocument();

// Xml문서 불러오기
doc.LoadXml("<Class></Class>");

XmlElement newElem0 = doc.CreateElement("Students");
XmlAttribute newAttr0 = doc.CreateAttribute("Number");
newAttr0.Value = "1";
newElem0.Attributes.Append(newAttr0);

// 첫노드 생성
doc.DocumentElement.AppendChild(newElem0);

XmlElement newElem1 = doc.CreateElement("Student");
XmlAttribute newAttr1 = doc.CreateAttribute("Number");
newAttr1.Value = "1";
newElem1.Attributes.Append(newAttr1);

newAttr1 = doc.CreateAttribute("Name");
newAttr1.Value = "김기태";
newElem1.Attributes.Append (newAttr1);

newElem0.AppendChild(newElem1);


XmlElement subNode = doc.CreateElement("Score"); // XmlElement생성
XmlElement score = doc.CreateElement("Korean");
XmlAttribute newAttr2 = doc.CreateAttribute("Level"); // XmlAttribute생성
newAttr2.Value = "5"; // XmlAttribute값 지정
score.Attributes.Append(newAttr2); // XmlAttribute값 붙이기
score.InnerText = "10"; //XmlElement안의 텍스트 지정
subNode.AppendChild(score);

score = doc.CreateElement("English");
score.InnerText = "20";
subNode.AppendChild(score);

score = doc.CreateElement("Science");
score.InnerText = "30";
subNode.AppendChild(score);

newElem1.AppendChild(subNode); // 하위의 XmlElement를 상위의 XmlElement에 붙이기

XmlElement subNode2 = doc.CreateElement("Score2");
XmlElement score2 = doc.CreateElement("Korean");
score2.InnerText = "10";
subNode2.AppendChild(score2);

score2 = doc.CreateElement("English");
score2.InnerText = "20";
subNode2.AppendChild(score2);

score2 = doc.CreateElement("Science");
score2.InnerText = "30";
subNode2.AppendChild(score2);

newElem1.AppendChild(subNode2);

// 생성될 파일 위치
string filepath = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\aa.xml";

using (XmlTextWriter writer = new XmlTextWriter(filepath, Encoding.UTF8))
{
    // Formatting.Indented : XmlTextWriter 개체의 속성 Indentation 및 IndentChar 값으로 자식 요소가 들여쓰기가 되어 저장
    writer.Formatting = Formatting.Indented;
    doc.Save(writer);
}
~~~

<br/>

#결과  
<img src="https://user-images.githubusercontent.com/39178978/152149344-016c2b4a-dba9-4dae-b93d-5c00147a4fd5.png">
