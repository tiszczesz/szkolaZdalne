package main;

public class Person {
  private String name;
  private String lastName;
  private int age;

  public  Person(String name,String lastName, int age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  
  @Override
  public String toString() {
    // TODO Auto-generated method stub
    return "Informacje o człowieku: "+this.name+" "+this.lastName+" wiek: "+this.age;

  }
}