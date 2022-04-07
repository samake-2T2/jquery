//요기 jquery코드
//근데...js링크가 먼저일어남
//도큐먼트 레디

$(document).ready(function() {

    // dark버튼
    $("#dark").click(function() {

        if($("#dark").hasClass("dark")) {

            $("body").css("backgroundColor", "black");
            $("p, h3, a").css("color", "white");
            $("#dark").html("밝게보기"); // innerHTML
            $("#dark").addClass("white"); // 클래스속성 추가
            $("#dark").removeClass("dark"); // 클래스속성 삭제

        } else {

            $("body").css("backgroundColor", "white");
            $("p, h3, a").css("color", "black");
            $("#dark").html("어둡게보기"); // innerHTML
            $("#dark").addClass("dark"); // 클래스속성 추가
            $("#dark").removeClass("white"); // 클래스속성 삭제

        }

    })

    // name버튼 이벤트
    $("#name").click(function() {

        if($("#name").hasClass("name")) {

            $(".inner > p").html("홍길자<br>20세<br>능력단위<br>Java, Oracle, JSP, CSS, Javascript"); 
            $(".inner > a").css("display", "none"); // 가림 
            $("#name").html("이름보기");
            $("#name").addClass("cont");
            $("#name").removeClass("name");

        } else {
            var str = "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다"

            $(".inner > p").html(str); 
            $(".inner > a").css("display", "inline");
            $("#name").html("내용보기");
            $("#name").addClass("name");
            $("#name").removeClass("cont");

        }

    })
})








