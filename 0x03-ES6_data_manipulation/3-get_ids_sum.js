export default function getStudentIdsSum(students) {
    return students.reduce((stu, su) => stu + su.id, 0);
}