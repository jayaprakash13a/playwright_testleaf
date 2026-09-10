function isAnagram(str1, str2) {

    return str1.split('').sort().join('') ===

        str2.split('').sort().join('');

}
str1 = 'listen';
str2 = 'silent';

console.log(str1 + " and " + str2 + " are anagrams: " + isAnagram(str1, str2));