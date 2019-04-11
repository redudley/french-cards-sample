// Include this line at the top of your scripts
// See the documentation for more information:
// 		https://lab.florianschwarz.net/PennController/wiki/documentation/

          //ACTION: check order of these items
PennController.Sequence( shuffle("domain_trial") );
PennController.ResetPrefix(null);
PennController.AddHost("http://web-risc.ens.fr/~rdudley/sample/");
          //ACTION: update name of server if necessary
          //ACTION: make sure files can be acquired in zipped version



        //ACTION: insert template for pulling from CSV file here
PennController.Template(
    row => PennController("domain_trial",
        newImage("domainImage1", row.domainImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(96,120)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage6", row.domainImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newCanvas("domain", 596, 140) //images need to be shuffled, or no?
          .settings.add(   10,    10, getImage("domainImage1") )
          .settings.add(   106,   10, getImage("domainImage2") )
          .settings.add(   202,   10, getImage("domainImage3") )
          .settings.add(   299,   10, getImage("domainImage4") )
          .settings.add(   394,   10, getImage("domainImage5") )
          .settings.add(   490,   10, getImage("domainImage6") )
          .settings.css("border", "solid 2px black")
          .print()
        ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
          .wait()
        ,
        newButton("ready", "entendre l'indice")
              //ACTION: change text of this button to french
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        newAudio("test sentence", row.Premises)
          .play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(96,96)
        ,
        newImage("sad", "frown.png")
          .settings.size(96,96)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage6", row.judgmentImage6)
          .settings.size(96,120)
          .settings.css("border", "solid 1px black")
        //ACTION: figure out necessary picture size and reset
        ,
        newCanvas("judgment", 576, 200) //images need to be shuffled, or no?
          .settings.add(   0,    0,   getImage("judgmentImage1") )
          .settings.add(   96,   0,   getImage("judgmentImage2") )
          .settings.add(   192,  0,   getImage("judgmentImage3") )
          .settings.add(   288,  0,   getImage("judgmentImage4") )
          .settings.add(   384,  0,   getImage("judgmentImage5") )
          .settings.add(   480,  0,   getImage("judgmentImage6") )
          .settings.add(   144,  168, getImage("happy") )
          .settings.add(   336,  168, getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
