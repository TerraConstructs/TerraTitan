package util

import "testing"

func Test_toCamelCase(t *testing.T) {
	tests := []struct {
		name string // description of this test case
		// Named input parameters for target function.
		s    string
		want string
	}{
		{
			name: "empty string",
			s:    "",
			want: "",
		}, {
			name: "single word",
			s:    "test",
			want: "test",
		}, {
			name: "two words",
			s:    "test_case",
			want: "testCase",
		}, {
			name: "multiple words",
			s:    "test_case_example",
			want: "testCaseExample",
		}, {
			name: "with numbers",
			s:    "test_123_case",
			want: "test123Case",
		}, {
			name: "multiple underscores",
			s:    "test__case",
			want: "testCase",
		}, {
			name: "leading underscore",
			s:    "_test_case",
			want: "testCase",
		}, {
			name: "trailing underscore",
			s:    "test_case_",
			want: "testCase",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := ToCamelCase(tt.s)
			if got != tt.want {
				t.Errorf("toCamelCase() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_toPascalCase(t *testing.T) {
	tests := []struct {
		name string // description of this test case
		// Named input parameters for target function.
		s    string
		want string
	}{
		{
			name: "empty string",
			s:    "",
			want: "",
		}, {
			name: "single word",
			s:    "test",
			want: "Test",
		}, {
			name: "two words",
			s:    "test_case",
			want: "TestCase",
		}, {
			name: "multiple words",
			s:    "test_case_example",
			want: "TestCaseExample",
		}, {
			name: "with numbers",
			s:    "test_123_case",
			want: "Test123Case",
		}, {
			name: "multiple underscores",
			s:    "test__case",
			want: "TestCase",
		}, {
			name: "leading underscore",
			s:    "_test_case",
			want: "TestCase",
		}, {
			name: "trailing underscore",
			s:    "test_case_",
			want: "TestCase",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := ToPascalCase(tt.s)
			if got != tt.want {
				t.Errorf("toPascalCase() = %v, want %v", got, tt.want)
			}
		})
	}
}
