package com.logicalenigma.aws;

public class App {
	public static void main(String[] args) {
		PointToPointOneWayCloudNative p2p1w = new PointToPointOneWayCloudNative(
				"https://sqs.us-east-1.amazonaws.com/343198174985/P2POneWayCloudNative");
		for (int i = 0; i < 5; i++) {
			p2p1w.run();
			System.out.println("p2p1w ran");
		}
	}
}
