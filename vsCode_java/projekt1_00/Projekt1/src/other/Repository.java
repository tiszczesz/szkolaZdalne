package other;

import java.util.ArrayList;
import java.util.List;

import main.Person;

public class Repository {
  public static List<Person> getAll(){
    List<Person> list = new ArrayList<>();
    list.add(new Person("Marian", "Grocki", 23));
    list.add(new Person("Roman", "Turecki", 23));
    list.add(new Person("Franek", "Gro", 23));
    list.add(new Person("Adam", "hAJDUK", 23));
     return list;
  }

}