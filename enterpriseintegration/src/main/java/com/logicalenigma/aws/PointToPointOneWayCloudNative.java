package com.logicalenigma.aws;

import java.util.UUID;

import software.amazon.awssdk.services.sqs.SqsClient;
import software.amazon.awssdk.services.sqs.model.MessageAttributeValue;
import software.amazon.awssdk.services.sqs.model.SendMessageRequest;

public class PointToPointOneWayCloudNative {
	private SqsClient sqs = SqsClient.builder().build();
	private String destination;
	private static long counter = 0;

	public PointToPointOneWayCloudNative(String destination) {
		this.destination = destination;
	}

	public void run() {

		sqs.sendMessage(
				SendMessageRequest.builder()
						.queueUrl(destination)
						.messageBody("Message " + ++counter)
						// .messageAttributes("MessageID",
						// MessageAttributeValue.builder().dataType("String")
						// .stringValue(UUID.randomUUID().toString()).build())
						.build());
	}

}