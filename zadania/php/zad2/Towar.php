<?php
class Towar
{
    private $id;
    private $name;
    private $price;
    private $description;
    public function __construct($id, $name, $price, $description)
    {
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
        $this->description = $description;
    }
    public function getFormToAdd()
    {
        return <<<TEXT
<form action='' method='POST'>
<input type='hidden' value='{$this->id}' name='id'>
<div id="line">
    
    <span>{$this->name}</span>
    <span class="error"></span>
  </div>
  <div class="line">
    <span >Cena: </span>
    <span style="font-weight:bold;">{$this->price} zł</span>
    <span class="error"></span>
  </div>
  <div class="line">
    <span >Opis: </span>
    <span>{$this->description}</span>
    <span class="error"></span>
  </div>
  <div class="line">
    <input type="submit" value="Dodaj do koszyka">
  </div>
</form>
TEXT;
    }
}
