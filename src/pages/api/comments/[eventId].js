export default function helper(req, res) {
    const {eventId} = req.query;
    if (req.method === 'POST') {
        const {email, userName, commentMessage} = req.body;
        if (!email || !email.includes('@') || !userName || userName.trim() === '' ||!commentMessage || commentMessage.trim() === '') {
            res.status(422).json({message: 'Invalid data'});
            return;
        }
        const newComment = {
            id: new Date().toISOString(),
            email,
            userName,
            commentMessage
        }
        res.status(201).json({message: 'Successfully created comment!', comment: newComment});
    }
    if (req.method === 'GET') {
        const mockedCommentsList = [
            {
                id: 'comment1',
                userName: 'Illia',
                email: 'illia@gmail.com',
                commentMessage: 'Test comment message',
            },
            {
                id: 'comment2',
                userName: 'Arthur',
                email: 'arthur@gmail.com',
                commentMessage: 'Another test comment message',
            }
        ];
        res.status(200).json({ comments: mockedCommentsList });
    }
}