using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class Product_select : MonoBehaviour
{
    public GameObject shoe;
    public GameObject Tshirt;
    public GameObject Watch;

    public GameObject Window_watch;
    public GameObject Window_Tshirt;
    public GameObject Window_Shoes;

    Animation Window_watch_Animation;
    Animation Window_Tshirt_Animation;
    Animation Window_Shoes_Animation;

    // Start is called before the first frame update
    void Start()
    {
       Window_watch_Animation = Window_watch.GetComponent<Animation>();
       Window_Tshirt_Animation = Window_Tshirt.GetComponent<Animation>();
       Window_Shoes_Animation = Window_Shoes.GetComponent<Animation>();
    }
    
    public void WatchButtonClicked(){
        shoe.SetActive(false);
        Tshirt.SetActive(false);
        Watch.SetActive(true);

        Window_watch_Animation["WAnimation"].speed = 1;
        Window_watch_Animation.Play();
    }

    public void ShoesButtonClicked(){
        shoe.SetActive(true);
        Tshirt.SetActive(false);
        Watch.SetActive(false);

        Window_Shoes_Animation["ShoeAnimation"].speed = 1;
        Window_Shoes_Animation.Play();
    }

    public void TshirtButtonClicked(){
        shoe.SetActive(false);
        Tshirt.SetActive(true);
        Watch.SetActive(false); 

        Window_Tshirt_Animation["TshirtAnimation"].speed = 1;
        Window_Tshirt_Animation.Play();
    }

    public void Closebuttonclicked(){
        string buttonName = EventSystem.current.currentSelectedGameObject.name;
        if (buttonName== "close_watch"){
            Window_watch_Animation["WAnimation"].speed = -1;
            Window_watch_Animation["WAnimation"].time = Window_watch_Animation["WAnimation"].length;
            Window_watch_Animation.Play();
        }
        else if (buttonName== "close_Tshirt"){
            Window_Tshirt_Animation["TshirtAnimation"].speed = -1;
            Window_Tshirt_Animation["TshirtAnimation"].time = Window_Tshirt_Animation["TshirtAnimation"].length;
            Window_Tshirt_Animation.Play();

        }
        else if (buttonName== "close_shoes"){
            Window_Shoes_Animation["ShoeAnimation"].speed = -1;
            Window_Shoes_Animation["ShoeAnimation"].time = Window_Shoes_Animation["ShoeAnimation"].length;
            Window_Shoes_Animation.Play();
        }
    }

  
}
