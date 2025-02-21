package services

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type AIService struct {
	APIKey string
}

type TaskSuggestionRequest struct {
	TaskDescription string `json:"task_description"`
}

type TaskSuggestionResponse struct {
	Suggestions []string `json:"suggestions"`
}

func NewAIService(apiKey string) *AIService {
	return &AIService{APIKey: apiKey}
}

func (s *AIService) GetTaskSuggestions(description string) ([]string, error) {
	requestBody, err := json.Marshal(TaskSuggestionRequest{TaskDescription: description})
	if err != nil {
		return nil, fmt.Errorf("failed to marshal request body: %w", err)
	}

	req, err := http.NewRequest("POST", "https://api.openai.com/v1/engines/davinci-codex/completions", bytes.NewBuffer(requestBody))
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Authorization", "Bearer "+s.APIKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("failed to send request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("received non-200 response: %s", resp.Status)
	}

	var response TaskSuggestionResponse
	if err := json.NewDecoder(resp.Body).Decode(&response); err != nil {
		return nil, fmt.Errorf("failed to decode response: %w", err)
	}

	return response.Suggestions, nil
}