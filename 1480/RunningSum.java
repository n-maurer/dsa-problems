public class RunningSum {
    public int[] runningSum(int[] nums) {
        int runningList[]  = new int[nums.length];

        int currentSum = 0;

        for (int i = 0; i < nums.length; i++){
            currentSum += nums[i];
            runningList[i] = currentSum;
        }
    return runningList;
    }
}
