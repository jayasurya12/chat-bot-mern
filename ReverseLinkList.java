
// Problem Description
// Reverse a linked list A from position B to C.

// NOTE: Do it in-place and in one-pass.



// Problem Constraints
// 1 <= |A| <= 106

// 1 <= B <= C <= |A|



// Input Format
// The first argument contains a pointer to the head of the given linked list, A.

// The second arugment contains an integer, B.

// The third argument contains an integer C.



// Output Format
// Return a pointer to the head of the modified linked list.



// Example Input
// Input 1:

//  A = 1 -> 2 -> 3 -> 4 -> 5
//  B = 2
//  C = 4

// Input 2:

//  A = 1 -> 2 -> 3 -> 4 -> 5
//  B = 1
//  C = 5


// Example Output
// Output 1:

//  1 -> 4 -> 3 -> 2 -> 5
// Output 2:

//  5 -> 4 -> 3 -> 2 -> 1


// Example Explanation
// Explanation 1:

//  In the first example, we want to reverse the highlighted part of the given linked list : 1 -> 2 -> 3 -> 4 -> 5 
//  Thus, the output is 1 -> 4 -> 3 -> 2 -> 5 
// Explanation 2:

//  In the second example, we want to reverse the highlighted part of the given linked list : 1 -> 4 -> 3 -> 2 -> 5  
//  Thus, the output is 5 -> 4 -> 3 -> 2 -> 1 





class ListNode {
    public int val;
    public ListNode next;

    ListNode(int x) { 
        val = x; 
        next = null; 
    }
}

public class ReverseLinkList {
    public ListNode reverseBetween(ListNode A, int B, int C) {
        ListNode head = A;
        for (int i = 1; i < B - 1; i++) {
            head = head.next;
        }
        if (B == 1) {
            return reverse(A, (C - B));
        } else {
            head.next = reverse(head.next, (C - B));
            return A;
        }  
    }

    public ListNode reverse(ListNode temp, int K) {
        ListNode pre = null;
        ListNode curr = temp;
        ListNode nxt = null;
        int count = 0;
        while(curr != null && count <= K) {
            nxt = curr.next;
            curr.next = pre;
            pre = curr;
            curr = nxt;
            count++;
        }
        temp.next = nxt;
        return pre;
    }

    // Utility method to print the linked list
    public void printList(ListNode head) {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1
        ListNode head1 = new ListNode(1);
        head1.next = new ListNode(2);
        head1.next.next = new ListNode(3);
        head1.next.next.next = new ListNode(4);
        head1.next.next.next.next = new ListNode(5);
        System.out.println("Original List:");
        solution.printList(head1);
        ListNode reversed1 = solution.reverseBetween(head1, 2, 4);
        System.out.println("List after reversing from position 2 to 4:");
        solution.printList(reversed1);

        // Example 2
        ListNode head2 = new ListNode(5);
        head2.next = new ListNode(7);
        head2.next.next = new ListNode(9);
        head2.next.next.next = new ListNode(11);
        head2.next.next.next.next = new ListNode(13);
        System.out.println("Original List:");
        solution.printList(head2);
        ListNode reversed2 = solution.reverseBetween(head2, 1, 5);
        System.out.println("List after reversing from position 1 to 5:");
        solution.printList(reversed2);

        // Example 3
        ListNode head3 = new ListNode(1);
        int B3 = 1;
        int C3 = 1;
        System.out.println("Original List:");
        solution.printList(head3);
        ListNode reversed3 = solution.reverseBetween(head3, B3, C3);
        System.out.println("List after reversing from position " + B3 + " to " + C3 + ":");
        solution.printList(reversed3);
    }
}



