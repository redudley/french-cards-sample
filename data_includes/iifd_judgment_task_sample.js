// Include this line at the top of your scripts
// See the documentation for more information:
// 		https://lab.florianschwarz.net/PennController/wiki/documentation/

PennController.Sequence( "instructions", randomize(startsWith("item") );
          //ACTION: check order of these items
PennController.ResetPrefix(null);
PennController.AddHost("http://web-risc.ens.fr/~rdudley/sample/");
          //ACTION: update name of server if necessary
          //ACTION: make sure files can be acquired in zipped version



PennController.CheckPreloaded( startsWith("item") )
    .label( "preload" );

PennController( "instructions" ,
  newButton("start", "Start the pilot")
        //ACTION: change text of this button to french
      .print()
      .wait()
);


        //ACTION: insert template for pulling from CSV file here
PennController.Template( PennController.defaultTable.filter("Item","item") ,
    row => PennController( "item" ,
        newAudio("domain sentence", row.DomainIntro)
          .play() // Immediately play the audio file
        ,
        newImage("domainImage1", row.domainImage1)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage2", row.domainImage2)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage3", row.domainImage3)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage4", row.domainImage4)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("domainImage5", row.domainImage5)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newCanvas("domain", 500, 200) //images need to be shuffled, or no?
          .settings.add(   0,     0, getImage("domainImage1") )
          .settings.add(   250,   0, getImage("domainImage2") )
          .settings.add(   500,   0, getImage("domainImage3") )
          .settings.add(   750,   0, getImage("domainImage4") )
          .settings.add(   1000,  0, getImage("domainImage5") )
          .print()
        ,
        newButton("ready", "Ready for the next item")
              //ACTION: change text of this button to french
            .print()
            .wait()
        ,
        newAudio("test sentence", row.Premises)
          //.play() // Immediately play the audio file
          .wait() // Wait to display images until after audio file is finished
        ,
        newImage("happy", "smile.png")
          .settings.size(200,200)
        ,
        newImage("sad", "frown.png")
          .settings.size(200,200)
        ,
        newImage("judgmentImage1", row.judgmentImage1)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage2", row.judgmentImage2)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage3", row.judgmentImage3)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage4", row.judgmentImage4)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newImage("judgmentImage5", row.judgmentImage5)
          .settings.size(125,50)
        //ACTION: figure out necessary picture size and reset
        ,
        newCanvas("judgment", 500, 200) //images need to be shuffled, or no?
          .settings.add(   0,     0, getImage("judgmentImage1") )
          .settings.add(   250,   0, getImage("judgmentImage2") )
          .settings.add(   500,   0, getImage("judgmentImage3") )
          .settings.add(   750,   0, getImage("judgmentImage4") )
          .settings.add(   1000,  0, getImage("judgmentImage5") )
          .settings.add(   0, 300, getImage("happy") )
          .settings.add( 300, 300, getImage("sad") )
          .print()
        ,
        newSelector("choice")
          .settings.add( getImage("happy") , getImage("sad") )
          .wait()
    )
  );
