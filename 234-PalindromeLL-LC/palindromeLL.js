var isPalindrome = function (head) {
    var linkedListLength = 0;

    let current = head;
    while (current) {
        linkedListLength++;
        current = current.next;
    }

    var middle = Math.floor(linkedListLength / 2);

    if (linkedListLength % 2 === 1) {
        console.log("odd");
    } else {
        console.log("even");
    }

    console.log(middle);
};
