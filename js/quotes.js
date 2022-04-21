const quotes = [
{
    quote: "생명이 사는 곳은 왜 저토록 쓸쓸한 맨 살일까",
    source: "문정희, [율포의 기억]",
},
{
    quote: "청노루 맑은 눈에 도는 구름",
    source: "박목월, [청노루]",
},
{
    quote: "떠나는 내게 머무는 그대에게 가을이 두 개",
    source: "시키, 하이쿠",
},
{
    quote: "캄캄한 밤이라도 하늘 아래선 마주 잡을 손 하나 오고 있거니",
    source: "고정희, [상한 영혼을 위하여]",
},
{
    quote: "비워둔 행간 속을 금 긋고 가는 별똥별",
    source: "유재영, [가을 시2]",
},
{
    quote: "구름에 달 가듯이 가는 나그네",
    source: "박목월, [나그네]",
},
{
    quote: "말도 없는 밤의 설움 소리 없는 봄의 가슴 꽃은 떨어진다 님은 탄식한다.",
    source: "김억, [봄은 간다]",
},
{
    quote: "밤은 푸른 안개에 싸인 호수 나는 잠의 쪽배를 타고 꿈을 낚는 어부다",
    source: "김동명, [밤]",
},
{
    quote: "동방은 하늘도 다 끝나고 비 한 방울 내리잖는 그때에도 오히려 꽃은 빨갛게 피지 않는가?",
    source: "이육사, [꽃]",
},
{
    quote: "가장 가혹한 고통의 밤이 끝난 자리에 가장 눈부시고 부드러운 꿈이 일어서지",
    source: "문정희, [성에꽃]",
}

];
const quote = document.querySelector("#quote span:first-child");
const source = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];//문구 랜덤으로 추출

quote.innerText = todaysQuote.quote; //문구 표시
source.innerText = todaysQuote.source;//출처 표시