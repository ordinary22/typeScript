const today:Date = new Date(); // 오늘날짜를 불러온다.

/**
 * Null 체크 함수
 * @param obj:String
 * @returns boolean
 */
const isNull = (obj:string):boolean => { 
    if( obj === null || obj === "" || obj === undefined ) {
        return true;
    }
}

/**
 * 숫자 관련 함수
 */
const number = {
    /**
     * 숫자 더하기
     * @param a
     * @param b 
     * @returns a+b 
     */
    add :(a:number, b:number):number => {
        return a+b;
    }
    , minus: (a:number, b:number):number => {
        return a-b;
    }
}