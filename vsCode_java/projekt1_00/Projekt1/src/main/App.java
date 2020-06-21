package main;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import other.Repository;

public class App {
    public static void main(String[] args) throws Exception {
        try{
             readFromFile();
        }catch(FileNotFoundException ex){
            System.out.println(ex.getMessage());
        }
        catch(IOException ex){
            System.out.println(ex.getMessage());
        }
       
    }
    public static void cw1(){
        System.out.println("Hello, World!");
        Person p = new Person("Jan", "Nowak", 34);
        System.out.println(p);
        List<Person> lista = Repository.getAll();
        for (Person person : lista) {
            System.out.println(person);
        }
        System.out.println("Aktualny katalog: " + System.getProperty("user.dir"));

        try (Stream<Path> walk = Files.walk(Paths.get(System.getProperty("user.dir")))) {

            List<String> result = walk.filter(Files::isRegularFile).map(x -> x.toString()).collect(Collectors.toList());

            result.forEach(System.out::println);

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    public static void readFromFile() throws IOException {
        String line = null;
        BufferedReader in = new BufferedReader(new FileReader("dane.txt"));
       

        while ((line = in.readLine()) != null) {
            System.out.println(line);           
        }

       in.close();
    }
}
