$( document ).ready(function() {
   
    //wait till json loaded
    if(mononode_texts.length > 1){
        function choose_character(from_emo, part){
            var characters = ["daughter", "parents", "son"];
            var pos = Math.floor(Math.random() * 2);
            var char = characters[pos];
            if(from_emo == 0){
                return char;
            }else if(multinode_texts[char][part].tag == from_emo){
                characters.splice(pos,1);
                pos = Math.floor(Math.random() * 1);
                char = characters[pos];
                return char;
            }else{
                return char;
            }
        };
        
        var chosen_character1 = choose_character(0, 0);
        var multi1 = multinode_texts[chosen_character1];
        var from_emo1 = multi1.part_1_1.tag;
        var chosen_character2 = choose_character(from_emo1, "part_2_1");
        var multi2 = multinode_texts[chosen_character2];
        var from_emo2 = multi2.part_2_1.tag;
        var chosen_character3 = choose_character(from_emo2, "part_3_1");
        var multi3 = multinode_texts[chosen_character3];
        var from_emo3 = multi3.part_3_1.tag;

        // function to find texts that come from a certain emotion
        //https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
        function find_in_object(my_object, my_criteria){

            return my_object.filter(function(obj) {
                return Object.keys(my_criteria).every(function(c) {
                    return obj[c] == my_criteria[c];
                });
            });
        
        }
        //populate arrays of mono-node texts that could come after each section of multi-node text according to emotion tags
        
        var choose_mono1 = Math.floor(Math.random() * (mononode_texts.length -1));
        var arr_mono1 = mononode_texts[choose_mono1];
        var arr_mono2 = find_in_object(mononode_texts, {from: from_emo1});
        var arr_mono3 = find_in_object(mononode_texts, {from: from_emo2});


        //function to choose random mono text from previous arrays
        function choose_mono_text(arr_m, prevArr){

            if(arr_m.length > 0){
                
                var ran = Math.floor(Math.random() * (arr_m.length -1));
                if(arr_m[ran].tag == prevArr.tag && arr_m[ran].situation == prevArr.situation){
                    arr_m.slice(ran, 1)
                    ran = Math.floor(Math.random() * (arr_m.length -1));
                    return arr_m[ran];
                }else{
                    return arr_m[ran];
                }
            } 
        }

        var mono1 = arr_mono1.text;
        var chosen_Arr2 = choose_mono_text(arr_mono2, arr_mono1);
        var mono2 = chosen_Arr2.text;
        var chosen_Arr3 = choose_mono_text(arr_mono3, chosen_Arr2);
        var mono3 = chosen_Arr3.text; 

        //insert text in document

        //1st part
        var el_m_1_1 = document.getElementById("multi1_1");
        let p1 = document.createElement("p");
        p1.textContent = multi1.part_1_1.text;
        el_m_1_1.append(p1);
        p1.classList.add("fadeIn");
        let pag1 = document.createElement("p");
        pag1.textContent = "1 of 9";
        el_m_1_1.append(pag1);

        var el_mo_1 = document.getElementById("mono1");
        if(el_mo_1 !== 0){
            
            for(i=0; i< mono1.length; i++){
                let p = document.createElement("p");
                p.textContent = mono1[i];
                el_mo_1.append(p);
                p.classList.add("fadeIn");
            }
        }
        let pag2 = document.createElement("p");
        pag2.textContent = "2 of 9";
        el_mo_1.append(pag2);

        var el_m_1_2 = document.getElementById("multi1_2");
        let p2 = document.createElement("p");
        p2.textContent = multi1.part_1_2.text;
        el_m_1_2.append(p2);
        p2.classList.add("fadeIn");
        let pag3 = document.createElement("p");
        pag3.textContent = "3 of 9";
        el_m_1_2.append(pag3);

        //2nd part
        var el_m_2_1 = document.getElementById("multi2_1");
        let p3 = document.createElement("p");
        p3.textContent = multi2.part_2_1.text;
        el_m_2_1.append(p3);
        p3.classList.add("fadeIn");
        let pag4 = document.createElement("p");
        pag4.textContent = "4 of 9";
        el_m_2_1.append(pag4);

        var el_mo_2 = document.getElementById("mono2");
        if(el_mo_2 !== 0){
            
            for(i=0; i< mono2.length; i++){
                let p = document.createElement("p");
                p.textContent = mono2[i];
                el_mo_2.append(p);
                p.classList.add("fadeIn");
            }
        }
        let pag5 = document.createElement("p");
        pag5.textContent = "5 of 9";
        el_mo_2.append(pag5);

        var el_m_2_2 = document.getElementById("multi2_2");
        let p4 = document.createElement("p");
        p4.textContent = multi2.part_2_2.text;
        el_m_2_2.append(p4);
        p4.classList.add("fadeIn");
        let pag6 = document.createElement("p");
        pag6.textContent = "6 of 9";
        el_m_2_2.append(pag6);

        //3rd part

        var el_m_3_1 = document.getElementById("multi3_1");
        let p5 = document.createElement("p");
        p5.textContent = multi3.part_3_1.text;
        el_m_3_1.append(p5);
        p5.classList.add("fadeIn");
        let pag7 = document.createElement("p");
        pag7.textContent = "7 of 9";
        el_m_3_1.append(pag7);

        var el_mo_3 = document.getElementById("mono3");
        if(el_mo_3 !== 0){
            
            for(i=0; i< mono3.length; i++){
                let p = document.createElement("p");
                p.textContent = mono3[i];
                el_mo_3.append(p);
                p.classList.add("fadeIn");
            }
        }
        let pag8 = document.createElement("p");
        pag8.textContent = "8 of 9";
        el_mo_3.append(pag8);

        var el_m_3_2 = document.getElementById("multi3_2");
        let p6 = document.createElement("p");
        p6.textContent = multi3.part_3_2.text;
        el_m_3_2.append(p6);
        p6.classList.add("fadeIn");
        let pag9 = document.createElement("p");
        pag9.textContent = "9 of 9";
        el_m_3_2.append(pag9);

        //display and hide divs with text
        //https://www.youtube.com/watch?v=RWMwIixxxnw


        var visibleDiv = 0;

        function showDiv(){
            $(".content").hide();
            $(".content:eq("+visibleDiv+")").show();

            //hide the previous button at the beginning of the story, so that the user can't skip to the end
            if(visibleDiv == 0){
                $("#prevBtn").hide();
            }else{
                $("#prevBtn").show();
            }
        }

        showDiv();

        //button functions
        function showNext(){
            if(visibleDiv == $(".content").length - 1){
                visibleDiv = 0;
            }else{
                visibleDiv ++;
            }
            showDiv();
        }

        function showPrev(){
            if(visibleDiv == 0){
            
                visibleDiv = $(".content").length - 1;
            }else{
                
                visibleDiv--;
            }
            showDiv();
        }

        var prevBtn = document.getElementById("prevBtn");
        var nextBtn = document.getElementById("nextBtn");


        prevBtn.addEventListener('click', function() {
            showPrev();
        }, false);

        nextBtn.addEventListener('click', function() {
            showNext();
        }, false);
    }
});

